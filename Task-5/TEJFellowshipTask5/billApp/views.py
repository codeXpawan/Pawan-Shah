from django.shortcuts import render
from django.http import JsonResponse
import json
from .models import Bill
from datetime import datetime

# Create your views here.

def landing(request):
    return render(request, 'index.html')


def submit_data(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        bill_date = datetime.now()
        bill_amount = data.get('grandTotal')
        bill = Bill(bill_date=bill_date, bill_amount=bill_amount)
        bill.save()
        return JsonResponse({'status': 'success', 'bill_id': bill.bill_id})
    
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})

def get_bills(request):
    if request.method == 'GET':
        bills = Bill.objects.all()
        if request.path == '/api/bills':
            data = []
            for bill in bills:
                data.append({
                    'bill_date&time': bill.bill_date,  
                    'grand_total': bill.bill_amount,
                })

            return JsonResponse(data, safe=False)
        elif request.path == '/bills':
            return render(request, 'bills.html', {'bills': bills})
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid path'})
    
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})

def get_bill_by_id(request, bill_id):
    if request.method == 'GET':
        try:
            bill = Bill.objects.get(bill_id=bill_id)
            return JsonResponse({'bill_date&time': bill.bill_date, 'grand_total': bill.bill_amount})
        except Bill.DoesNotExist:
            return JsonResponse({'status': 'error', 'message': 'Bill not found'})
    
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})