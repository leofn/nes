from django.db import models
import random


class Survey(models.Model):
    code = models.CharField(max_length=10, unique=True)

    lime_survey_id = models.IntegerField(unique=True)
    is_initial_evaluation = models.BooleanField(default=True)

    class Meta:
        permissions = (
            ("view_survey", "Can view survey"),
        )

    def save(self, *args, **kwargs):
        if not self.pk:
            self.code = self.create_random_survey_code()
        super(Survey, self).save(*args, **kwargs)

    @staticmethod
    def create_random_survey_code():
        used_codes = set([survey.code for survey in Survey.objects.all()])
        possible_code = set(['Q' + str(item) for item in range(1, 100000)])
        available_codes = list(possible_code - used_codes)
        return random.choice(available_codes)


class SensitiveQuestion(models.Model):
    survey = models.ForeignKey(Survey, related_name='sensitive_questions')
    code = models.CharField(max_length=150)
    question = models.TextField()

    class Meta:
        unique_together = ('survey', 'code')
