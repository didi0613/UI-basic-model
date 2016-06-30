function eventListener() {
    var map = [];

    function register(name, event) {
        if (map.contains(name)) {
            map[name].push(event);
        } else {
            map[name] = event;
        }
    }

    function unregister(name, event) {
        if (map.contains(name)) {
            map[name] = null;
        }
    }

    function post(name, data) {
        var event = new Event();
        event.doEvent(data);
        this.register(name, event);
    }
}