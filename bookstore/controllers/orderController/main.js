const BaseController = require('@partFramework/baseController');

exports.controller = class OrderController extends BaseController {
  
  constructor(core, schema, config) {
    super(core, schema, config);    
  }

  async create(body) {

  }

  async readAll() {

  }

  async readByUser(params) {

  }

  async approval(body) {

  }

  async delete(params) {

  }

}

exports.introduceToLoader = BaseController.exportedProperties(require('./schema'), require('./config'));