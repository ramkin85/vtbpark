export const
    GATEWAY_PORT='32265',
    //REQUEST_LOGIN_URL = 'http://10.20.5.254:32751/login',
    //REQUEST_LOGINOUT_URL = 'http://10.20.5.254:32751/logout',
    REQUEST_LOGIN_URL = 'http://10.20.5.254:'+GATEWAY_PORT+'/auth/login',
    REQUEST_LOGINOUT_URL = 'http://10.20.5.254:'+GATEWAY_PORT+'/auth/logout',
    //REQUEST_LOGIN_URL = 'http://smironovich.diasoft.ru:8090/login',
    //REQUEST_AUTOMOBILE_LIST_URL = 'http://10.20.5.254:32350/Automobiles',
    //REQUEST_AUTOMOBILE_URL = 'http://10.20.5.254:32350/Automobile';
    REQUEST_AUTOMOBILE_LIST_URL = 'http://10.20.5.254:'+GATEWAY_PORT+'/automobiles/cars',
    REQUEST_AUTOMOBILE_URL = 'http://10.20.5.254:'+GATEWAY_PORT+'/automobiles/Automobile';
    //REQUEST_AUTOMOBILE_LIST_URL = 'http://dlekhanov:9999/automobiles/Automobiles';