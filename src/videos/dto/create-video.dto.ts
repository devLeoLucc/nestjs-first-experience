import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from "class-validator"

export class CreateVideoDto {

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  title: string

  @ApiProperty({ type: 'string' })
  @IsString()
  @IsOptional()
  description: string | null

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  category_id: number
}


export class CreateVideoWithUploadDocs extends CreateVideoDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: string
}