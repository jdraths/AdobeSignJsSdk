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
    define(['ApiClient', 'model/widgets/ParticipantSetMemberInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ParticipantSetMemberInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.WidgetAdditionalParticipationSetInfo = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ParticipantSetMemberInfo);
  }
}(this, function(ApiClient, ParticipantSetMemberInfo) {
  'use strict';




  /**
   * The WidgetAdditionalParticipationSetInfo model module.
   * @module model/widgets/WidgetAdditionalParticipationSetInfo
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>WidgetAdditionalParticipationSetInfo</code>.
   * @alias module:model/widgets/WidgetAdditionalParticipationSetInfo
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>WidgetAdditionalParticipationSetInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetAdditionalParticipationSetInfo} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetAdditionalParticipationSetInfo} The populated <code>WidgetAdditionalParticipationSetInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('memberInfos')) {
        obj['memberInfos'] = ApiClient.convertToType(data['memberInfos'], [ParticipantSetMemberInfo]);
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'Number');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
    }
    return obj;
  }

  /**
   * Array of ParticipantInfo objects, containing participant-specific data (email, e.g.) for all the additional participants in the widget
   * @member {Array.<module:model/widgets/ParticipantSetMemberInfo>} memberInfos
   */
  exports.prototype['memberInfos'] = undefined;
  /**
   * Index indicating position at which signing group needs to sign. Additional participant to sign at first place is assigned a index of 1. Widget participant should not have any order specified. Widget participant should not have any email address and and can not have phone authentication applied. Different signingOrder specified in input should form a valid consecutive increasing sequence of integers. Otherwise signingOrder will be considered invalid
   * @member {Number} order
   */
  exports.prototype['order'] = undefined;
  /**
   * Role assumed by all participants in the set (signer, approver, etc.) Widget First Participant will only have roles - Signer, Approver, Acceptor and Form Filler
   * @member {module:model/widgets/WidgetAdditionalParticipationSetInfo.RoleEnum} role
   */
  exports.prototype['role'] = undefined;


  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: "SIGNER"
     * @const
     */
    "SIGNER": "SIGNER",
    /**
     * value: "DELEGATE_TO_SIGNER"
     * @const
     */
    "DELEGATE_TO_SIGNER": "DELEGATE_TO_SIGNER",
    /**
     * value: "APPROVER"
     * @const
     */
    "APPROVER": "APPROVER",
    /**
     * value: "DELEGATE_TO_APPROVER"
     * @const
     */
    "DELEGATE_TO_APPROVER": "DELEGATE_TO_APPROVER",
    /**
     * value: "ACCEPTOR"
     * @const
     */
    "ACCEPTOR": "ACCEPTOR",
    /**
     * value: "DELEGATE_TO_ACCEPTOR"
     * @const
     */
    "DELEGATE_TO_ACCEPTOR": "DELEGATE_TO_ACCEPTOR",
    /**
     * value: "FORM_FILLER"
     * @const
     */
    "FORM_FILLER": "FORM_FILLER",
    /**
     * value: "DELEGATE_TO_FORM_FILLER"
     * @const
     */
    "DELEGATE_TO_FORM_FILLER": "DELEGATE_TO_FORM_FILLER",
    /**
     * value: "CERTIFIED_RECIPIENT"
     * @const
     */
    "CERTIFIED_RECIPIENT": "CERTIFIED_RECIPIENT",
    /**
     * value: "DELEGATE_TO_CERTIFIED_RECIPIENT"
     * @const
     */
    "DELEGATE_TO_CERTIFIED_RECIPIENT": "DELEGATE_TO_CERTIFIED_RECIPIENT"  };


  return exports;
}));

