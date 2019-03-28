/**
*  Copyright 2019 Adobe Systems Incorporated. All rights reserved.
*  This file is licensed to you under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License. You may obtain a copy
*  of the License at http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software distributed under
*  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
*  OF ANY KIND, either express or implied. See the License for the specific language
*  governing permissions and limitations under the License.
*
*
**/


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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/widgets/CommonViewConfiguration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommonViewConfiguration'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.WidgetViewInfo = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.CommonViewConfiguration);
  }
}(this, function(ApiClient, CommonViewConfiguration) {
  'use strict';




  /**
   * The WidgetViewInfo model module.
   * @module model/widgets/WidgetViewInfo
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>WidgetViewInfo</code>.
   * @alias module:model/widgets/WidgetViewInfo
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>WidgetViewInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetViewInfo} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetViewInfo} The populated <code>WidgetViewInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('commonViewConfiguration')) {
        obj['commonViewConfiguration'] = CommonViewConfiguration.constructFromObject(data['commonViewConfiguration']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * Common view configuration for all the available views
   * @member {module:model/widgets/CommonViewConfiguration} commonViewConfiguration
   */
  exports.prototype['commonViewConfiguration'] = undefined;
  /**
   * Name of the requested widget view
   * @member {module:model/widgets/WidgetViewInfo.NameEnum} name
   */
  exports.prototype['name'] = undefined;


  /**
   * Allowed values for the <code>name</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NameEnum = {
    /**
     * value: "AUTHORING"
     * @const
     */
    "AUTHORING": "AUTHORING",
    /**
     * value: "DOCUMENT"
     * @const
     */
    "DOCUMENT": "DOCUMENT",
    /**
     * value: "MANAGE"
     * @const
     */
    "MANAGE": "MANAGE",
    /**
     * value: "POST_CREATE"
     * @const
     */
    "POST_CREATE": "POST_CREATE",
    /**
     * value: "SIGNING"
     * @const
     */
    "SIGNING": "SIGNING",
    /**
     * value: "ALL"
     * @const
     */
    "ALL": "ALL"  };


  return exports;
}));


