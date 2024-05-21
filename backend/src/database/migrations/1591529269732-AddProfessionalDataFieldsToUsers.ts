import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddProfessionalDataFieldsToUsers1591529269732
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('users', [
      new TableColumn({
        name: 'field',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'crm',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'primary_specialty',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'secundary_specialty',
        type: 'varchar',
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('users', [
      new TableColumn({
        name: 'field',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'crm',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'primary_specialty',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'secundary_specialty',
        type: 'varchar',
      }),
    ]);
  }
}
