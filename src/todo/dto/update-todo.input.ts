import { CreateTodoInput } from './create-todo.input';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput extends CreateTodoInput {
  @Field(() => Int)
  id: number;
}
