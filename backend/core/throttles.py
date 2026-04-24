from rest_framework.throttling import AnonRateThrottle


class AppointmentThrottle(AnonRateThrottle):
    scope = 'appointment'
