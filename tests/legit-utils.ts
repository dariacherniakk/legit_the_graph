import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddCompany,
  CreateRequest,
  OwnershipTransferred,
  ValidateRequest
} from "../generated/Legit/Legit"

export function createAddCompanyEvent(
  name: string,
  companyAddress: Address,
  companyType: i32
): AddCompany {
  let addCompanyEvent = changetype<AddCompany>(newMockEvent())

  addCompanyEvent.parameters = new Array()

  addCompanyEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  addCompanyEvent.parameters.push(
    new ethereum.EventParam(
      "companyAddress",
      ethereum.Value.fromAddress(companyAddress)
    )
  )
  addCompanyEvent.parameters.push(
    new ethereum.EventParam(
      "companyType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(companyType))
    )
  )

  return addCompanyEvent
}

export function createCreateRequestEvent(
  id: BigInt,
  isCompany: boolean,
  companyName: string,
  userAccount: Address,
  title: ethereum.Tuple,
  isExecuted: boolean
): CreateRequest {
  let createRequestEvent = changetype<CreateRequest>(newMockEvent())

  createRequestEvent.parameters = new Array()

  createRequestEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  createRequestEvent.parameters.push(
    new ethereum.EventParam("isCompany", ethereum.Value.fromBoolean(isCompany))
  )
  createRequestEvent.parameters.push(
    new ethereum.EventParam(
      "companyName",
      ethereum.Value.fromString(companyName)
    )
  )
  createRequestEvent.parameters.push(
    new ethereum.EventParam(
      "userAccount",
      ethereum.Value.fromAddress(userAccount)
    )
  )
  createRequestEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromTuple(title))
  )
  createRequestEvent.parameters.push(
    new ethereum.EventParam(
      "isExecuted",
      ethereum.Value.fromBoolean(isExecuted)
    )
  )

  return createRequestEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createValidateRequestEvent(
  id: BigInt,
  userAccount: Address,
  companyName: string,
  title: ethereum.Tuple
): ValidateRequest {
  let validateRequestEvent = changetype<ValidateRequest>(newMockEvent())

  validateRequestEvent.parameters = new Array()

  validateRequestEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  validateRequestEvent.parameters.push(
    new ethereum.EventParam(
      "userAccount",
      ethereum.Value.fromAddress(userAccount)
    )
  )
  validateRequestEvent.parameters.push(
    new ethereum.EventParam(
      "companyName",
      ethereum.Value.fromString(companyName)
    )
  )
  validateRequestEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromTuple(title))
  )

  return validateRequestEvent
}
