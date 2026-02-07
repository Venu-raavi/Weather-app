class Storage {
    static saveCity(city) {
        localStorage.setItem("lastCity", city);
    }

    static getCity() {
        return localStorage.getItem("lastCity");
    }
}