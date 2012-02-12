if(typeof(forge) == 'undefined') {
  var forge = {};

  forge.is = {};

  forge.is.mock = function() {
    return true;
  };

  forge.logging = {};

  forge.logging.log = function() {
    var args = Array.prototype.slice.call( arguments, 0 );
    console.log(args)
  };

  forge.logging.debug = forge.logging.log;
  forge.logging.info = forge.logging.log;
  forge.logging.warning = forge.logging.log;
  forge.logging.error = forge.logging.log;
  forge.logging.critical = forge.logging.log;

  forge.file = {};
  forge.file.getImage = function(next, error) {
    forge.logging.log("forge: getImage called")
    next({image: 'wee.jpg'});
  };
  forge.file.imageURL = function(file, options, next, err) {
    forge.logging.log("forge: imageURL called")
    next(file.image);
  };

  forge.contact = {};
  forge.contact.select = function(next, error) {
    var fixture = {
      "id": "14894",
      "displayName": "Mr Joe Bloggs",
      "name": {
        "formatted": "Mr Joe Bloggs",
        "familyName": "Bloggs",
        "givenName": "Joe",
        "middleName": null,
        "honorificPrefix": "Mr",
        "honorificSuffic": null
      },
      "nickname": "Joe",
      "phoneNumbers": [
        {
          "value": "+447554639203",
          "type": "work",
          "pref": false
        }
      ],
      "emails": [
        {
          "value": "joe-bloggs@trigger.io",
          "type": "work",
          "pref": false
        }
      ],
      "addresses": [
        {
          "country": "United Kingdom",
          "formatted": "1-11 Baches Street\nLondon\nLondon\N1 6DL\nUnited Kingdom",
          "locality": "London",
          "postalCode": "N1 6DL",
          "pref": false,
          "region": "London",
          "streetAddress": "1-11 Baches Street",
          "type": "work"
        }
      ],
      "ims": [
        {
          "value": "joe-bloggs@trigger.io",
          "type": "gtalk",
          "pref": false
        }
      ],
      "organizations": [
        {
          "department": "Product development",
          "name": "Forger",
          "pref": false,
          "title": "Software engineer",
          "type": null
        }
      ],
      "birthday": "1983-11-23",
      "note": "Any text can go here",
      "photos": [
        {
          "value": "data:image/jpg;base64,ABCDEF1234",
          "type": null,
          "pref": false
        }
      ],
      "categories": null,
      "urls": [
        {
          "value": "http://trigger.io",
          "type": "homepage",
          "pref": false
        }
      ],
    }
    forge.logging.log("forge: contact.select")
    next(fixture);
  }
}
