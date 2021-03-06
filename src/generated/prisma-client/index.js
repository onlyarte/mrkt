"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Item",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "OrderStatus",
    embedded: false
  },
  {
    name: "OrderItem",
    embedded: false
  },
  {
    name: "Wish",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://mrkt-d34375ffd2.herokuapp.com/mrkt/dev`
});
exports.prisma = new exports.Prisma();
