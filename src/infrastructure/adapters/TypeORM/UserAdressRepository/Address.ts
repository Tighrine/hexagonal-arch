import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DBUser } from '../UserRepository';
import { User as DomainUser, Address as DomainAddress } from '../../../../domain/application/entities';

@Entity()
class Address implements DomainAddress {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    address!: string;

    @Column()
    city!: string;

    @Column()
    state!: string;

    @Column()
    zip!: string;

    @Column()
    country!: string;

    @Column()
    updatedAt!: Date;

    @ManyToOne(() => DBUser, user => user.Addresses)
    user!: DomainUser;

    toDomainEntity(): Partial<DomainAddress> {
        return {
            id: this.id,
            address: this.address,
            city: this.city,
            state: this.state,
            zip: this.zip,
            country: this.country,
            updatedAt: this.updatedAt
        }
    } 
}

export default Address;