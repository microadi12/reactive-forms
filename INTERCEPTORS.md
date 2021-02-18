HttpClient

HttpClient is used for performing http request & response.

The HttpClient service is available in the @angular/common/http package.

The new HttpClient is included in the Http Client Module which is used to initiate Http request 
& response in Angular apps.

The HttpClientModule needs to be imported into the module. Usually app module.

HttpClient also gives other useful functionality like interceptors, headers etc.

Intercepts and handles an HttpRequest or HttpResponse

Most interceptors transform the outgoing request before passing it to the next interceptor in the
chain, by calling next.handle(transformedReq)

An interceptor may transform the response event stream as well, by applying additional RxJs operators on the stream returned by next.handle().

It is also rare but valid for an interceptor to return multiple on the event stream for a single request.

we can create a multiple Interceptor. 

All Http Request goes from interceptor. In interceptor we are addind a headers & then its goes to server side.               