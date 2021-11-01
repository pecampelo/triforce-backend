"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sdk = require('api')('@trio/v1#2tcyskkucpmux4');
var routes = (0, express_1.Router)();
var id = '4d4db59e-4a79-45ca-8ea2-acdc8faebccc';
var secret = '-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAuS7bCVzyuV6wUMZl5PlgjU2kguWnK4ze68nJU9Fl7TjhqLuM\nJPQYDj/PXzhlH4Li5NxC3zQ0XRDZVouhjS3SyaLwOaYNSBeOejeYkby5rUttT2p2\nP/fe1lSpy4YigWIC8osA0ajXszBnmUuSGHcG5hecVbotekG2t2nNAmh/xt/yeenM\n7PiptzSn14QEpxM3YvyB+hgUiQpVOA3VSoeJ4lqDjGJURrP8Tpk1ukhwW3Ml5kor\ncOvD9uhAbruxfxsJuplw991+NdGPI5rszDWPiLMJzeX7ImmWWNECjGxc7FX637gP\n70ZnyT8+8a5nN+qSf9rPMSuBoFASoH8XLca5FQIDAQABAoIBAQCVjUiprB3+JIFi\nCof5vogCNeUZLVyvaCoT5DeqcF7PkPN1MFmC8nqG73OK4+GO7EZPK6750ZBEZLoR\nEd0bRhmIbAVzmS36vcN74nBdqjuNv299Bm6PRJ/7Gg6yZhZxxPS6ahX0PFZOyVWx\nUH2hMmco5YKFHUFjDbUBNPmy6y/eLFW1sMqQwhpvsnglncK1ANzKrwxhCmmd8m7p\nPtoCEseLAjRdPu39XeclJ02VwdTqbE0RYdMZ7TYIYvewuv1lTE0WJXeMAEOmcgBm\nX56Lgi8A6q8LdT4j3ZzmLRXJ+G76YSIdLPE29Xe06CSbF+v8iMWfKkc8gWvpJ2UR\n2iNRGAA1AoGBAPYYOPodJHuqDNkc8N7tbn9ACQFeqwpfM+uc3+zOMuKlHpsXbfRz\n8naIrzwLt6ffT+05Bqrv2vPcUzDlVSc6VBgcn/9emghrx0Rbc5ohmDH/DDIWZ4/k\nNvew4XWUPdXIR84nCqTH45Q8GxQIYZfKdfd+60rt460VF2gT5lzvwI1TAoGBAMCi\n/tX3txDhnVgAyDmz118srcndms/+ZIjOL2CYPsN31C9PSKVHbRfEsWKrl/3bu2fb\nY265oFUG+7yrHWz4cEZ3wXkjFyp53IWRLsWlwAnNOVsas3ntV18MLzQrYPUHuHab\njfF7vMdmPABK7efxf3LuPxrnGf6GYNDZ3UFUXmr3AoGALwsSWT2Y68rmCdrucK8S\noGCtWAWwzJrGYhPq+mmwcIMABsXDzycbAm2+kcvrn7ugm8h67dJMGLHVdVNho84S\npUlTjI2ZBGMWBIs23g/t+CC5RBnkUi1eFJtLfh6Ic4WFtHLiJf3QE1YqFvpDLbEW\nO+mXMQuoqj2N6+dh8gIi3OECgYBU2bbMAo/FRMtsjvOizv9nsaNfDlh5k0EvLTqb\nHpROvwJcUFzcSEjaNk43+wM400eJ6I20oNjpeuj5YpnUfN3ffDJhLD6w+/pRbvCe\nKHMdHiNMaMdzRkK83/4OyaisZVkwDTaJjopJflOhgV+nUa1kr2JmdDLz9LbCZ6RY\neVQZYwKBgHR+FBso3+JL8Lp+yWOwoGshCI2BW2joVKdsu0UullfOEVfqp/wC0cZW\n80od3R/qR0KND+9KeNuymwUhS9JAvpAzjPXrUGEMEpmWFCSEsR52oB7C7dEUSBbY\nZiqddaTl5U7j5Fsw2/SW0iIr++s5B7CkmNHf5Yyvj7XWmSJc6jyS\n-----END RSA PRIVATE KEY-----\n\n';
sdk.auth(id, secret);
routes.get('/', function (req, res) {
    res.send({
        endpoints: [
            '/institutions',
            '/credentials',
            '/accounts',
            '/transactions',
        ],
    });
    res.end();
});
routes.get('/institutions', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sdk.get('/institutions')
                    .then(function (_a) {
                    var data = _a.data;
                    return res.json(data);
                })
                    .catch(function (err) { return console.log(err); })];
            case 1:
                _a.sent();
                res.end();
                return [2 /*return*/];
        }
    });
}); });
routes.post('/credentials', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var institution_id, credentials;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                institution_id = '49f351d3-d41b-4276-bfbb-d1f06c8516cd';
                credentials = {
                    branch_number: '3333',
                    account_number: '54321-0',
                    password: '090807',
                    person_type: 'natural_person',
                };
                return [4 /*yield*/, sdk.get('/connections', { institution_id: institution_id, credentials: credentials })
                        .then(function (_a) {
                        var data = _a.data;
                        return res.json(data);
                    })
                        .catch(function (err) { return console.log(err); })];
            case 1:
                _a.sent();
                res.end();
                return [2 /*return*/];
        }
    });
}); });
routes.get('/accounts/:connection_id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var connection_id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                connection_id = req.params.connection_id;
                return [4 /*yield*/, sdk.get('/accounts', { connection_id: connection_id })
                        .then(function (_a) {
                        var data = _a.data;
                        return res.json(data);
                    })
                        .catch(function (err) { return console.log(err); })];
            case 1:
                _a.sent();
                res.end();
                return [2 /*return*/];
        }
    });
}); });
routes.post('/accounts/:connection_id/transactions', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var connection_id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                connection_id = req.params.connection_id;
                return [4 /*yield*/, sdk.get('/accounts', { connection_id: connection_id })
                        .then(function (_a) {
                        var data = _a.data;
                        return res.json(data);
                    })
                        .catch(function (err) { return console.log(err); })];
            case 1:
                _a.sent();
                res.end();
                return [2 /*return*/];
        }
    });
}); });
routes.get('/accounts/:connection_id/transactions', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var connection_id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                connection_id = req.params.connection_id;
                return [4 /*yield*/, sdk.get('/connections', { connection_id: connection_id })
                        .then(function (_a) {
                        var data = _a.data;
                        return res.json(data);
                    })
                        .catch(function (err) { return console.log(err); })];
            case 1:
                _a.sent();
                res.end();
                return [2 /*return*/];
        }
    });
}); });
exports.default = routes;
