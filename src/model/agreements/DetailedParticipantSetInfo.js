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
    define(['ApiClient', 'model/agreements/DetailedParticipantInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DetailedParticipantInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.DetailedParticipantSetInfo = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.DetailedParticipantInfo);
  }
}(this, function(ApiClient, DetailedParticipantInfo) {
  'use strict';




  /**
   * The DetailedParticipantSetInfo model module.
   * @module model/agreements/DetailedParticipantSetInfo
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>DetailedParticipantSetInfo</code>.
   * @alias module:model/agreements/DetailedParticipantSetInfo
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>DetailedParticipantSetInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/DetailedParticipantSetInfo} obj Optional instance to populate.
   * @return {module:model/agreements/DetailedParticipantSetInfo} The populated <code>DetailedParticipantSetInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('memberInfos')) {
        obj['memberInfos'] = ApiClient.convertToType(data['memberInfos'], [DetailedParticipantInfo]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'Number');
      }
      if (data.hasOwnProperty('privateMessage')) {
        obj['privateMessage'] = ApiClient.convertToType(data['privateMessage'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique identifier of the participant set. This cannot be changed as part of the PUT call.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Array of ParticipantInfo objects, containing participant-specific data (e.g. email). All participants in the array belong to the same set
   * @member {Array.<module:model/agreements/DetailedParticipantInfo>} memberInfos
   */
  exports.prototype['memberInfos'] = undefined;
  /**
   * Name of ParticipantSet (it can be empty, but needs not to be unique in a single agreement). Maximum no of characters in participant set name is restricted to 255. This cannot be changed as part of the PUT call.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Index indicating sequential signing group (specified for hybrid routing). This cannot be changed as part of the PUT call.
   * @member {Number} order
   */
  exports.prototype['order'] = undefined;
  /**
   * Participant set's private message - all participants in the set will receive the same message. This cannot be changed as part of the PUT call.
   * @member {String} privateMessage
   */
  exports.prototype['privateMessage'] = undefined;
  /**
   * Role assumed by all participants in the set (signer, approver etc.). This cannot be changed as part of the PUT call.
   * @member {module:model/agreements/DetailedParticipantSetInfo.RoleEnum} role
   */
  exports.prototype['role'] = undefined;
  /**
   * The agreement status with respect to the participant set. This cannot be changed as part of the PUT call.
   * @member {module:model/agreements/DetailedParticipantSetInfo.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


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
     * value: "SENDER"
     * @const
     */
    "SENDER": "SENDER",
    /**
     * value: "APPROVER"
     * @const
     */
    "APPROVER": "APPROVER",
    /**
     * value: "ACCEPTOR"
     * @const
     */
    "ACCEPTOR": "ACCEPTOR",
    /**
     * value: "CERTIFIED_RECIPIENT"
     * @const
     */
    "CERTIFIED_RECIPIENT": "CERTIFIED_RECIPIENT",
    /**
     * value: "FORM_FILLER"
     * @const
     */
    "FORM_FILLER": "FORM_FILLER",
    /**
     * value: "DELEGATE_TO_SIGNER"
     * @const
     */
    "DELEGATE_TO_SIGNER": "DELEGATE_TO_SIGNER",
    /**
     * value: "DELEGATE_TO_APPROVER"
     * @const
     */
    "DELEGATE_TO_APPROVER": "DELEGATE_TO_APPROVER",
    /**
     * value: "DELEGATE_TO_ACCEPTOR"
     * @const
     */
    "DELEGATE_TO_ACCEPTOR": "DELEGATE_TO_ACCEPTOR",
    /**
     * value: "DELEGATE_TO_CERTIFIED_RECIPIENT"
     * @const
     */
    "DELEGATE_TO_CERTIFIED_RECIPIENT": "DELEGATE_TO_CERTIFIED_RECIPIENT",
    /**
     * value: "DELEGATE_TO_FORM_FILLER"
     * @const
     */
    "DELEGATE_TO_FORM_FILLER": "DELEGATE_TO_FORM_FILLER",
    /**
     * value: "SHARE"
     * @const
     */
    "SHARE": "SHARE"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "CANCELLED"
     * @const
     */
    "CANCELLED": "CANCELLED",
    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",
    /**
     * value: "EXPIRED"
     * @const
     */
    "EXPIRED": "EXPIRED",
    /**
     * value: "NOT_YET_VISIBLE"
     * @const
     */
    "NOT_YET_VISIBLE": "NOT_YET_VISIBLE",
    /**
     * value: "WAITING_FOR_OTHERS"
     * @const
     */
    "WAITING_FOR_OTHERS": "WAITING_FOR_OTHERS",
    /**
     * value: "WAITING_FOR_MY_APPROVAL"
     * @const
     */
    "WAITING_FOR_MY_APPROVAL": "WAITING_FOR_MY_APPROVAL",
    /**
     * value: "WAITING_FOR_AUTHORING"
     * @const
     */
    "WAITING_FOR_AUTHORING": "WAITING_FOR_AUTHORING",
    /**
     * value: "WAITING_FOR_MY_ACKNOWLEDGEMENT"
     * @const
     */
    "WAITING_FOR_MY_ACKNOWLEDGEMENT": "WAITING_FOR_MY_ACKNOWLEDGEMENT",
    /**
     * value: "WAITING_FOR_MY_ACCEPTANCE"
     * @const
     */
    "WAITING_FOR_MY_ACCEPTANCE": "WAITING_FOR_MY_ACCEPTANCE",
    /**
     * value: "WAITING_FOR_MY_FORM_FILLING"
     * @const
     */
    "WAITING_FOR_MY_FORM_FILLING": "WAITING_FOR_MY_FORM_FILLING",
    /**
     * value: "WAITING_FOR_MY_DELEGATION"
     * @const
     */
    "WAITING_FOR_MY_DELEGATION": "WAITING_FOR_MY_DELEGATION",
    /**
     * value: "WAITING_FOR_MY_SIGNATURE"
     * @const
     */
    "WAITING_FOR_MY_SIGNATURE": "WAITING_FOR_MY_SIGNATURE",
    /**
     * value: "WAITING_FOR_MY_VERIFICATION"
     * @const
     */
    "WAITING_FOR_MY_VERIFICATION": "WAITING_FOR_MY_VERIFICATION",
    /**
     * value: "WAITING_FOR_PREFILL"
     * @const
     */
    "WAITING_FOR_PREFILL": "WAITING_FOR_PREFILL"  };


  return exports;
}));


