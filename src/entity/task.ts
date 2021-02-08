import {
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn
} from "typeorm";
import { TUsers } from "./user";

// Revisar ...extends BaseEntity, en el ctrll deberia poder usar como mongoose pero no me deja.
@Entity("Tasks")
export class TTask extends BaseEntity {

    @PrimaryGeneratedColumn()
    task_id: number;

    @Column({ length: 10 })
    task_name: string;

    @Column({ length: 30 })
    task_description: string;

    @OneToOne(() => TUsers)
    @JoinColumn()
    user_id: TUsers;
}