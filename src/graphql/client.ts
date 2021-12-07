import { GraphQLClient } from "graphql-request";

const cliente = new GraphQLClient("http://localhost:1337/graphql");

export default cliente;
