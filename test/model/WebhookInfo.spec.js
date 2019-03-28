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
    instance = new SwaggerJsClient.WebhookInfo();
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

  describe('WebhookInfo', function() {
    it('should create an instance of WebhookInfo', function() {
      // uncomment below and update the code to test WebhookInfo
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be.a(SwaggerJsClient.WebhookInfo);
    });

    it('should have the property applicationDisplayName (base name: "applicationDisplayName")', function() {
      // uncomment below and update the code to test the property applicationDisplayName
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be();
    });

    it('should have the property applicationName (base name: "applicationName")', function() {
      // uncomment below and update the code to test the property applicationName
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "lastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be();
    });

    it('should have the property resourceId (base name: "resourceId")', function() {
      // uncomment below and update the code to test the property resourceId
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be();
    });

    it('should have the property resourceType (base name: "resourceType")', function() {
      // uncomment below and update the code to test the property resourceType
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be();
    });

    it('should have the property webhookConditionalParams (base name: "webhookConditionalParams")', function() {
      // uncomment below and update the code to test the property webhookConditionalParams
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be();
    });

    it('should have the property webhookSubscriptionEvents (base name: "webhookSubscriptionEvents")', function() {
      // uncomment below and update the code to test the property webhookSubscriptionEvents
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be();
    });

    it('should have the property webhookUrlInfo (base name: "webhookUrlInfo")', function() {
      // uncomment below and update the code to test the property webhookUrlInfo
      //var instane = new SwaggerJsClient.WebhookInfo();
      //expect(instance).to.be();
    });

  });

}));
