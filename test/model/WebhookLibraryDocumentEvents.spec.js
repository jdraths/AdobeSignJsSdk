/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 6.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerJsClient);
  }
}(this, function(expect, SwaggerJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerJsClient.WebhookLibraryDocumentEvents();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WebhookLibraryDocumentEvents', function() {
    it('should create an instance of WebhookLibraryDocumentEvents', function() {
      // uncomment below and update the code to test WebhookLibraryDocumentEvents
      //var instane = new SwaggerJsClient.WebhookLibraryDocumentEvents();
      //expect(instance).to.be.a(SwaggerJsClient.WebhookLibraryDocumentEvents);
    });

    it('should have the property includeDetailedInfo (base name: "includeDetailedInfo")', function() {
      // uncomment below and update the code to test the property includeDetailedInfo
      //var instane = new SwaggerJsClient.WebhookLibraryDocumentEvents();
      //expect(instance).to.be();
    });

    it('should have the property includeDocumentsInfo (base name: "includeDocumentsInfo")', function() {
      // uncomment below and update the code to test the property includeDocumentsInfo
      //var instane = new SwaggerJsClient.WebhookLibraryDocumentEvents();
      //expect(instance).to.be();
    });

  });

}));
