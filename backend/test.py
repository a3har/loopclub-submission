from django.http import JsonResponse

def APIResponse(data:dict={},message:str=""):
    return {'data':data,'message':message}

if __name__ == "__main__":
    print(APIResponse())