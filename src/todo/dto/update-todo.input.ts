import { InputType, Field, Int } from '@nestjs/graphql';

import { CreateTodoInput } from './create-todo.input';

@InputType()
export class UpdateTodoInput extends CreateTodoInput {
  @Field(() => Int)
  id: number;
}
