import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

// Revisar ...extends BaseEntity, en el ctrll deberia poder usar como mongoose pero no me deja.
@Entity("Users")
export class TUsers extends BaseEntity {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ length: 20 })
    user_name: string;

    @Column({ length: 20 })
    user_email: string;

    @Column({ length: 20 })
    user_password: string;
}