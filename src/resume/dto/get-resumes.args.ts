import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional, IsUUID, MinLength } from 'class-validator';

@ArgsType()
export class GetResumesArgs {
  @Field({ nullable: true })
  @IsOptional()
  @IsUUID()
  id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @MinLength(2)
  title?: string;
}
