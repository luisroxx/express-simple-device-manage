import { StatusCodes } from "http-status-codes";
import * as request from "supertest";
import {
  deviceType3DPrinter,
  deviceTypeFurnace,
  deviceTypeQualityCheck,
  factoryBurlingon,
  factoryWilmington,
  manufacturerVida,
} from "../../src/core/seed";
import { RequestBodyCreateDevice } from "../../src/device/controller/request";
import {
  DeviceRepository,
  factories,
} from "../../src/device/repository/device";
import { createServer } from "../../src/server";
import {
  furnace1,
  printer1,
  printer1W,
  printer2,
  qualityCheck1,
} from "../testdata/deviceResponse";

const app = createServer();

describe("/devices", () => {
  beforeEach(() => {
    DeviceRepository.clear();
  });

  const addFactory = () => {
    factories.set(1, factoryBurlingon());
    factories.set(2, factoryWilmington());
  };

  describe("GET /", () => {
    it("Should list all devices", (done) => {
      addFactory();
      request(app)
        .get("/devices")
        .expect(
          200,
          [printer1, printer2, furnace1, qualityCheck1, printer1W],
          (err) => done(err)
        );
    });

    it("Should return empty list of devices", (done) => {
      request(app)
        .get("/devices")
        .expect(200, [], (err) => done(err));
    });
  });

  describe("GET /:id", () => {
    it("should find device", (done) => {
      addFactory();
      request(app)
        .get("/devices/1")
        .expect(StatusCodes.OK, printer1, (err) => done(err));
    });

    it("Should return 404 when device not found", (done) => {
      request(app)
        .get("/devices/2")
        .expect(StatusCodes.NOT_FOUND, (err) => done(err));
    });
  });

  describe("POST /", () => {
    it("Should create device", (done) => {
      addFactory();
      const body: RequestBodyCreateDevice = {
        name: "Printer 2",
        ip: "192.168.3.10",
        factoryId: factoryBurlingon().id,
        manufacturerId: manufacturerVida.id,
        deviceTypeId: deviceType3DPrinter.id,
        isOnline: true,
        attributes: [],
      };

      request(app)
        .post("/devices")
        .send(body)
        .expect(
          StatusCodes.OK,
          {
            id: 6,
            name: "Printer 2",
            ip: "192.168.3.10",
            factory: { id: 1, name: "Burlington" },
            manufacturerType: { id: 1, name: "Vida" },
            deviceType: { id: 1, name: "3D Printer" },
            isOnline: true,
            attributes: [],
          },
          (err) => done(err)
        );
    });

    it("Should create device with attribute", (done) => {
      addFactory();
      const body: RequestBodyCreateDevice = {
        name: "Furnace 2",
        ip: "192.168.3.10",
        factoryId: factoryBurlingon().id,
        manufacturerId: manufacturerVida.id,
        deviceTypeId: deviceTypeFurnace.id,
        isOnline: true,
        attributes: [
          {
            deviceAttributesEntityId: 1,
            value: "3000 C",
          },
        ],
      };

      request(app)
        .post("/devices")
        .send(body)
        .expect(
          StatusCodes.OK,
          {
            id: 6,
            name: "Furnace 2",
            ip: "192.168.3.10",
            factory: { id: 1, name: "Burlington" },
            manufacturerType: { id: 1, name: "Vida" },
            deviceType: {
              id: 2,
              name: "Furnace",
            },
            isOnline: true,
            attributes: [
              { deviceAttributeId: 1, name: "Max Temp", value: "3000 C" },
            ],
          },
          (err) => done(err)
        );
    });

    it("Should fail creating device cause of missing attributes", (done) => {
      addFactory();
      const body: RequestBodyCreateDevice = {
        name: "Furnace 2",
        ip: "192.168.3.10",
        factoryId: factoryBurlingon().id,
        manufacturerId: manufacturerVida.id,
        deviceTypeId: deviceTypeFurnace.id,
        isOnline: true,
        attributes: [],
      };

      request(app)
        .post("/devices")
        .send(body)
        .expect(
          StatusCodes.INTERNAL_SERVER_ERROR,
          {
            statusCode: 500,
            errorMessage: "Missing values for DeviceAttributes with id's: 1",
          },
          (err) => done(err)
        );
    });

    it("Should return 400 ip already exists device", (done) => {
      addFactory();
      const body: RequestBodyCreateDevice = {
        name: "Printer 1",
        ip: "192.168.3.5",
        factoryId: factoryBurlingon().id,
        manufacturerId: manufacturerVida.id,
        deviceTypeId: deviceType3DPrinter.id,
        isOnline: true,
        attributes: [],
      };

      request(app)
        .post("/devices")
        .send(body)
        .expect(
          StatusCodes.BAD_REQUEST,
          `{"statusCode":400,"errorMessage":"Factory with id: 1 already has a device with ip: 192.168.3.5"}`,
          (err) => done(err)
        );
    });
  });

  describe("PUT /", () => {
    it("Should update device", (done) => {
      addFactory();
      const body: RequestBodyCreateDevice = {
        name: "Printer 1 updated",
        ip: "192.168.3.5",
        factoryId: factoryBurlingon().id,
        manufacturerId: manufacturerVida.id,
        deviceTypeId: deviceType3DPrinter.id,
        isOnline: true,
        attributes: [],
      };

      request(app)
        .put("/devices/1")
        .send(body)
        .expect(
          StatusCodes.OK,
          {
            id: 1,
            name: "Printer 1 updated",
            ip: "192.168.3.5",
            factory: { id: 1, name: "Burlington" },
            manufacturerType: { id: 1, name: "Vida" },
            deviceType: { id: 1, name: "3D Printer" },
            isOnline: true,
            attributes: [],
          },
          (err) => done(err)
        );
    });

    it("Should update device with attribute", (done) => {
      addFactory();
      const body: RequestBodyCreateDevice = {
        name: "Furnace 1",
        ip: "192.168.3.10",
        factoryId: factoryBurlingon().id,
        manufacturerId: manufacturerVida.id,
        deviceTypeId: deviceTypeFurnace.id,
        isOnline: true,
        attributes: [
          {
            deviceAttributesEntityId: 1,
            value: "7000 C",
          },
        ],
      };

      request(app)
        .put("/devices/3")
        .send(body)
        .expect(
          StatusCodes.OK,
          {
            id: 3,
            name: "Furnace 1",
            ip: "192.168.3.10",
            factory: { id: 1, name: "Burlington" },
            manufacturerType: { id: 1, name: "Vida" },
            deviceType: {
              id: 2,
              name: "Furnace",
            },
            isOnline: true,
            attributes: [
              { deviceAttributeId: 1, name: "Max Temp", value: "7000 C" },
            ],
          },
          (err) => done(err)
        );
    });

    it("Should fail updating device cause of missing attributes", (done) => {
      addFactory();
      const body: RequestBodyCreateDevice = {
        name: "Quality check 1",
        ip: "192.168.3.10",
        factoryId: factoryBurlingon().id,
        manufacturerId: manufacturerVida.id,
        deviceTypeId: deviceTypeQualityCheck.id,
        isOnline: true,
        attributes: [],
      };

      request(app)
        .put("/devices/3")
        .send(body)
        .expect(
          StatusCodes.INTERNAL_SERVER_ERROR,
          {
            statusCode: 500,
            errorMessage: "Missing values for DeviceAttributes with id's: 2",
          },
          (err) => done(err)
        );
    });

    it("Should fail updating device cause duplicated IP", (done) => {
      addFactory();
      const body: RequestBodyCreateDevice = {
        name: "Printer 1 updated",
        ip: "192.168.3.6",
        factoryId: factoryBurlingon().id,
        manufacturerId: manufacturerVida.id,
        deviceTypeId: deviceType3DPrinter.id,
        isOnline: true,
        attributes: [],
      };

      request(app)
        .put("/devices/1")
        .send(body)
        .expect(
          StatusCodes.BAD_REQUEST,
          {
            statusCode: 400,
            errorMessage:
              "Factory with id: 1 already has a device with ip: 192.168.3.6",
          },
          (err) => done(err)
        );
    });

    it("Should return 404", (done) => {
      const body: RequestBodyCreateDevice = {
        name: "Printer 1 updated",
        ip: "192.168.3.5",
        factoryId: factoryBurlingon().id,
        manufacturerId: manufacturerVida.id,
        deviceTypeId: deviceType3DPrinter.id,
        isOnline: true,
        attributes: [],
      };

      request(app)
        .put("/devices/2")
        .send(body)
        .expect(
          StatusCodes.INTERNAL_SERVER_ERROR,
          {
            statusCode: 500,
            errorMessage: "Factory with id: 1 does not exist in database",
          },
          (err) => done(err)
        );
    });
  });

  describe("DELETE /", () => {
    it("Should delete device", (done) => {
      addFactory();
      request(app)
        .delete("/devices/1")
        .expect(StatusCodes.OK, (err) => {
          const device = DeviceRepository.findOne(1);
          if (!device) {
            done(err);
            return;
          }

          done(new Error("Device was not deleted"));
        });
    });

    it("Should return 404 when device not found", (done) => {
      request(app)
        .delete("/devices/2")
        .expect(StatusCodes.NOT_FOUND, (err) => done(err));
    });
  });
});
