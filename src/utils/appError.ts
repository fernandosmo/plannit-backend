// Classe para tratamento de erros

export default class AppError extends Error {
  status: string;
  isOperational: boolean;
  constructor(public statusCode: number = 500, public message: string) {
    super(message);
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    /* Error.captureStackTrace - Cria uma pilha de chamadas

    Ex: 
    const fun1 = () => { fun2(); };
    const fun2 = () => { fun3(); };
    const fun3 = () => { log_stack(); };
    function log_stack() {
    let err = {};
    Error.captureStackTrace(err);
    console.log(err.stack);
    }
    fun1();

    Isso rende:

    Error
    at log_stack (/path/to/example.js:6:8)
    at fun3 (/path/to/example.js:3:22)
    at fun2 (/path/to/example.js:2:22)
    at fun1 (/path/to/example.js:1:22)
    
    */

    Error.captureStackTrace(this, this.constructor);
  }
}
