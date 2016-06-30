function eventListener() {
    var map = [];

    function register(name, event) {
        if (name in map) {
            map[name].push(event);
        } else {
            map[name] = event;
        }
    }

    function unregister(name, event) {
        if (name in map) {
            map[name] = null;
        }
    }

    function post(name, data) {
        var events = map[name];
        events.forEach(function (e) {
            e.doEvent(data);
        });
        this.register(name, event);
    }
}