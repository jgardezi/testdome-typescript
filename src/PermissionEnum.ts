export class PermissionEnum {
  getPermissionList(permission: Permission): string[] {
    const values: string[] = [];
    for (const item in Permission) {
      console.log(`Permission: ${+Permission[item]} Item: ${item}`);
      if((permission & +Permission[item]) === +Permission[item]) {
        values.push(item);
      }
    }
    return values;
  }
}

export enum Permission {
  Read = 1,
  Write = 2,
  Execute = 4
}