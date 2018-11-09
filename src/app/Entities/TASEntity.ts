export class TasEntity {
    'openapi': string;
    'servers': Array<TasServerEntity> = new Array<TasServerEntity>();
    'info': TasInfoEntity = new TasInfoEntity();
}

export class TasInfoEntity {
    'contact': TasInfoContactEntity = new TasInfoContactEntity();
    'license': TasInfoLicenseEntity = new TasInfoLicenseEntity();
}

export class TasInfoContactEntity {
    'name': string;
    'email': string;
}

export class TasInfoLicenseEntity {
    'name': string;
    'url': string;
}

export class TasServerEntity {
    'url': string;
    'variables': Array<TasServerVariableEntity> = new Array<TasServerVariableEntity>();
    'description': string;
}

export class TasServerVariableEntity {
    'name': string;
    'description': string;
    'default': string;
    'enums': Array<string> = new Array<string>();
}

export class TasServerEnumEntity {
    'value': string;
}
