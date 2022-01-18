import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'
import { EquipmentData } from '../../src/server/modules/entities/equipmentData.entity'

export class CreateTable1641772405755 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'information',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true
          },
          {
            name: 'rooms',
            type: 'int'
          },
          {
            name: 'price',
            type: 'int'
          },
          {
            name: 'city',
            type: 'varchar'
          },
          {
            name: 'address',
            type: 'varchar'
          }
        ]
      }),
      true
    )

    await queryRunner.createTable(
      new Table({
        name: 'equipment_data',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar'
          }
        ]
      }),
      true
    )

    await queryRunner.createTable(
      new Table({
        name: 'equipment',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'equipmentDataId',
            type: 'int',
            isUnique: false,
            isGenerated: true
          },
          {
            name: 'informationId',
            type: 'int'
          }
        ]
      }),
      true
    )

    await queryRunner.createForeignKey(
      'equipment',
      new TableForeignKey({
        columnNames: ['equipmentDataId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'equipment_data',
        onDelete: 'CASCADE'
      })
    )

    await queryRunner.createForeignKey(
      'equipment',
      new TableForeignKey({
        columnNames: ['informationId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'information',
        onDelete: 'CASCADE'
      })
    )

    await queryRunner.manager.save(EquipmentData, [
      {
        id: 1,
        name: 'Air Condition'
      },
      {
        id: 2,
        name: 'Elevator'
      },
      {
        id: 3,
        name: 'Parking'
      }
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('equipment')
    await queryRunner.dropTable('equipment_data')
    await queryRunner.dropTable('information')
  }
}
