"""
This file demonstrates writing tests using the unittest module. These will pass
when you run "manage.py test".

Replace this with more appropriate tests for your application.
"""

from .views import addressGet

from django.test import TestCase


class SimpleTest(TestCase):
    def test_basic_addition(self):
        """
        Getting .
        """
        self.assertEqual(1 + 1, 2)
