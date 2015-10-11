function Singleton(o) {
    o.__defineGetter__('instance', function() {
        if(!o._instance){
            o._instance = new o();
        }
        return o._instance;
    });

}

var Action = {};
Action.create = function(){
    var subject = new Rx.Subject();
    var fn = function(value) {
        subject.onNext(value)
    }
    Object.setPrototypeOf(fn,subject);
    return fn;
}

var Store = function(state){
    this.subject = new Rx.ReplaySubject(1);
    this.updateState(state);
}

Store.prototype.updateState = function(state){
    this.state = state;
    this.subject.onNext(state);
}

Store.prototype.subscribe = function(handler){
    this.subject.subscribe(handler);
}
