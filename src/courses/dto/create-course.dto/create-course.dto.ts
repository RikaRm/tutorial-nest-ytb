import { IsString, IsNumber } from 'class-validator'
export class CreateCourseDto {
    @IsNumber()
    readonly id?: number

    @IsString()
    readonly name: string

    @IsString()
    readonly description: string

    @IsString({ each: true })
    readonly tags: []
}
