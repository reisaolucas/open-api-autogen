export class TasEntity {
    'openapi' = '3.0.0';
    'servers': Array<TasServerEntity> = new Array<TasServerEntity>();
    'info': TasInfoEntity = new TasInfoEntity();
}

export class TasInfoEntity {
    'description': string;
    'version': string;
    'title': string;
    'contact': TasInfoContactEntity = new TasInfoContactEntity();
    'x-totvs': TasInfoXTotvsEntity = new TasInfoXTotvsEntity();
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

export class TasInfoXTotvsEntity {
    'messageDocumentation': TasInfoXTotvsMesDocEntity = new TasInfoXTotvsMesDocEntity();
    'productInformation': Array<TasInfoXTotvsProdInfoEntity> = new Array<TasInfoXTotvsProdInfoEntity>();
}

export class TasInfoXTotvsMesDocEntity {
    'description': string;
    'name': string;
    'segment': string;
}

export class TasInfoXTotvsProdInfoEntity {
    'product': string;
    'adapter': string;
    'contact': string;
    'description': string;
    'helpUrl': string;
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
