from django.db import models

# Create your models here.
class Bill(models.Model):
    bill_id = models.AutoField(primary_key=True)
    bill_date = models.DateTimeField(auto_now_add=True)
    bill_amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Bill {self.bill_date} - {self.bill_amount}"