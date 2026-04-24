from dataclasses import dataclass

from django.conf import settings
from django.core.mail import send_mail


@dataclass
class NotificationPayload:
    subject: str
    message: str
    recipients: list[str]


class EmailNotificationService:
    @staticmethod
    def send(payload: NotificationPayload):
        if not payload.recipients:
            return
        send_mail(
            subject=payload.subject,
            message=payload.message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=payload.recipients,
            fail_silently=True,
        )


class SmsNotificationService:
    """Stub adapter to plug in a local SMS gateway or provider later."""

    @staticmethod
    def send(phone: str, message: str):
        _ = (phone, message)
        return None


class AdminAlertService:
    @staticmethod
    def send_new_appointment_alert(appointment):
        payload = NotificationPayload(
            subject=f'New Appointment: {appointment.patient_name}',
            message=(
                f'New appointment request from {appointment.patient_name}.\n'
                f'Phone: {appointment.phone}\n'
                f'Date: {appointment.preferred_date} {appointment.preferred_time}\n'
                f'Service: {appointment.service.name if appointment.service else "Not selected"}\n'
                f'Doctor: {appointment.doctor.name if appointment.doctor else "No preference"}\n'
                f'Message: {appointment.message or "N/A"}'
            ),
            recipients=[settings.CLINIC_ALERT_EMAIL] if settings.CLINIC_ALERT_EMAIL else [],
        )
        EmailNotificationService.send(payload)


def send_patient_confirmation(appointment):
    if not appointment.email:
        return

    payload = NotificationPayload(
        subject='Appointment Request Received',
        message=(
            f'Dear {appointment.patient_name},\n\n'
            'Thank you for booking with us. Your request has been received and our team will contact you shortly.\n\n'
            f'Preferred slot: {appointment.preferred_date} {appointment.preferred_time}\n\n'
            'Regards,\nClinic Team'
        ),
        recipients=[appointment.email],
    )
    EmailNotificationService.send(payload)
