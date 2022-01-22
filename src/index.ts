import bodyParser from "body-parser";
import express from "express";
// veramo dependencies
import { MessagingRouter, RequestWithAgentRouter } from "@veramo/remote-server";
import { agent } from "./veramo/setup";

const app = express();

const port = 3001;
app.listen(port, () => console.log(`App listen at port ${port}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const requestWithAgent = RequestWithAgentRouter({ agent });
const messagingRouter = MessagingRouter({
  metaData: { type: 'DIDComm', value: 'integration test' },
})

/* ==== API sections === */
app.use("/messaging", requestWithAgent, messagingRouter);
