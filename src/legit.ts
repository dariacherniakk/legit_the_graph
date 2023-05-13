import {
  AddCompany as AddCompanyEvent,
  CreateRequest as CreateRequestEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ValidateRequest as ValidateRequestEvent
} from "../generated/Legit/Legit"
import {
  AddCompany,
  CreateRequest,
  OwnershipTransferred,
  ValidateRequest
} from "../generated/schema"

export function handleAddCompany(event: AddCompanyEvent): void {
  let entity = new AddCompany(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.companyAddress = event.params.companyAddress
  entity.companyType = event.params.companyType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreateRequest(event: CreateRequestEvent): void {
  let entity = new CreateRequest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.isCompany = event.params.isCompany
  entity.companyName = event.params.companyName
  entity.userAccount = event.params.userAccount
  entity.title_companyType = event.params.title.companyType
  entity.title_name = event.params.title.name
  entity.isExecuted = event.params.isExecuted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleValidateRequest(event: ValidateRequestEvent): void {
  let entity = new ValidateRequest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.userAccount = event.params.userAccount
  entity.companyName = event.params.companyName
  entity.title_companyType = event.params.title.companyType
  entity.title_name = event.params.title.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
