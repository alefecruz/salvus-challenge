import { MigrationInterface, QueryRunner, TableColumn, Table } from 'typeorm';

export default class AddPersonalDataFieldsToUsers1591492682736
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('users', [
      new TableColumn({
        name: 'cpf',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'dateofbirth',
        type: 'timestamp',
      }),
      new TableColumn({
        name: 'address',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'cep',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'city',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'state',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'cellphone',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'homephone',
        type: 'varchar',
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('users', [
      new TableColumn({
        name: 'cpf',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'dateofbirth',
        type: 'timestamp',
      }),
      new TableColumn({
        name: 'address',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'cep',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'city',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'state',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'cellphone',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'homephone',
        type: 'varchar',
      }),
    ]);
  }
}
