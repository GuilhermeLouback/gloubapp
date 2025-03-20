/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Tecnologia } from '@prisma/client';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class TecnologiaProvider {
    constructor(private readonly prisma: PrismaProvider){}
    
    async obterTodas(): Promise<Tecnologia[]>{
        return this.prisma.tecnologia.findMany()
    }

    async obterDestaques(): Promise<Tecnologia[]>{
        return this.prisma.tecnologia.findMany({
            where: {
                destaque: true
            }
        })
    }
}
