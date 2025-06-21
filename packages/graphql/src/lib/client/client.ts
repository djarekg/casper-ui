import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import type { DocumentNode, OperationVariables, TypedDocumentNode } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Client {
  readonly #apollo = inject(Apollo);

  query<T, V extends OperationVariables | undefined = OperationVariables>(
    query: DocumentNode | TypedDocumentNode<T, V>,
    variables?: V,
  ) {
    const result = this.#apollo.query({ query, variables }).pipe(map(({ data }) => data));
    return toSignal<T>(result);
  }
}
