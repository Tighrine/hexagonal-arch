import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User as DomainUser, Address as DomainAddress } from './../../../../domain/application/entities';
import { DBAddress } from "../UserAdressRepository";


@Entity('User')
class User implements DomainUser {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    group!: string;

    @Column()
    password!: string;

    @Column()
    updatedAt!: Date;

    @OneToMany(() => DBAddress, Address => Address.user)
    Addresses!: DomainAddress[];

    toDomainEntity(): Partial<DomainUser> {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            group: this.group,
            updatedAt: this.updatedAt
        }
    }   
}

export default User;