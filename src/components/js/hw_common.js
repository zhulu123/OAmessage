import Vue from 'vue';
Vue.prototype.bean = function (key, value) {
    var stringJson = '{"' + key + '": ""}';
    var json = JSON.parse(stringJson);
    json[key] = JSON.stringify(value);
    return json;
}