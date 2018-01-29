var fivebeans = require('fivebeans');

var host = 'localhost';
var port = 11333;
var tube = 'invoice';

var job1 =
    {
        type: 'invoice',
        payload: {
            order_id: 1,
            token: "asdfasdgadskdmfgsldkfmgdfl",
            name: "Henk Pijlman",
            email: "henk@pijlman.nl",
            products: [
                {
                    "productId": "31b3104a68a343beac162b7006664612",
                    "price": 5.9,
                    "name": "Maanvis koi",
                    "shorDescription": "De Maanvis koi is een zeer geliefde aquariumvis uit de cichlidae familie. Deze aquariumvis eet, net zoals andere vissen graag Diepvriesvoer, Granulaat, Levend voer, Rode muggenlarven, Zwarte muggenlarven. De Maanvis koi is ook bekend als pterophyllum scalare koi, en zwemt graag in een aquarium van 90 cm of groter.",
                    "result": "reserved"
                },
                {
                    "productId": "050a3cb74b984066a2c49ca78df42215",
                    "price": 9.5,
                    "name": "Waaierhand rotsgarnaal",
                    "shorDescription": "De is een zeer geliefde aquariumvis uit de Atyidae familie. Deze aquariumvis eet, net zoals andere vissen graag Bodemvuil, Diepvriesvoer, Granulaat. De Waaierhand rotsgarnaal is ook bekend als Atyopsis moluccensis, en zwemt graag in een aquarium van 60 cm of groter.",
                    "result": "reserved"
                }
            ]
        }
    };

var job2 =
    {
        type: 'invoice',
        payload: {
            order_id: 2,
            token: "asdfasdgadskdmfgsldkfmgdfl",
            name: "Henk Pijlman",
            email: "henk@pijlman.nl",
            products: [
                {
                    "productId": "31b3104a68a343beac162b7006664612",
                    "price": 5.9,
                    "name": "Maanvis koi",
                    "shorDescription": "De Maanvis koi is een zeer geliefde aquariumvis uit de cichlidae familie. Deze aquariumvis eet, net zoals andere vissen graag Diepvriesvoer, Granulaat, Levend voer, Rode muggenlarven, Zwarte muggenlarven. De Maanvis koi is ook bekend als pterophyllum scalare koi, en zwemt graag in een aquarium van 90 cm of groter.",
                    "result": "reserved"
                },
                {
                    "productId": "050a3cb74b984066a2c49ca78df42215",
                    "price": 9.5,
                    "name": "Waaierhand rotsgarnaal",
                    "shorDescription": "De is een zeer geliefde aquariumvis uit de Atyidae familie. Deze aquariumvis eet, net zoals andere vissen graag Bodemvuil, Diepvriesvoer, Granulaat. De Waaierhand rotsgarnaal is ook bekend als Atyopsis moluccensis, en zwemt graag in een aquarium van 60 cm of groter.",
                    "result": "reserved"
                },
                {
                    "productId": "050a3cb74b984066a2c49ca78df42215",
                    "price": 9.5,
                    "name": "Waaierhand rotsgarnaal",
                    "shorDescription": "De is een zeer geliefde aquariumvis uit de Atyidae familie. Deze aquariumvis eet, net zoals andere vissen graag Bodemvuil, Diepvriesvoer, Granulaat. De Waaierhand rotsgarnaal is ook bekend als Atyopsis moluccensis, en zwemt graag in een aquarium van 60 cm of groter.",
                    "result": "reserved"
                },
                {
                    "productId": "050a3cb74b984066a2c49ca78df42215",
                    "price": 9.5,
                    "name": "Waaierhand rotsgarnaal",
                    "shorDescription": "De is een zeer geliefde aquariumvis uit de Atyidae familie. Deze aquariumvis eet, net zoals andere vissen graag Bodemvuil, Diepvriesvoer, Granulaat. De Waaierhand rotsgarnaal is ook bekend als Atyopsis moluccensis, en zwemt graag in een aquarium van 60 cm of groter.",
                    "result": "reserved"
                },
                {
                    "productId": "050a3cb74b984066a2c49ca78df42215",
                    "price": 9.5,
                    "name": "Waaierhand rotsgarnaal",
                    "shorDescription": "De is een zeer geliefde aquariumvis uit de Atyidae familie. Deze aquariumvis eet, net zoals andere vissen graag Bodemvuil, Diepvriesvoer, Granulaat. De Waaierhand rotsgarnaal is ook bekend als Atyopsis moluccensis, en zwemt graag in een aquarium van 60 cm of groter.",
                    "result": "reserved"
                }
            ]
        }
    };

var emitter = new fivebeans.client(host, port);
emitter.on('connect', function () {
    emitter.use('invoice', function (err, tname) {
        console.log("using " + tname);
        emitter.put(0, 0, 60, JSON.stringify(['invoice', job1]), function (err, jobid) {
            console.log('queued a string reverse job in invoice: ' + jobid);
            emitter.put(0, 0, 60, JSON.stringify(['invoice', job2]), function (err, jobid) {
                console.log('queued a key emitter job in invoice: ' + jobid);


            });
        });
    });
});

emitter.connect();