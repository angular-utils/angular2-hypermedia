import {Link} from './link';

export class Resource {

  constructor(private _body: any) {}

  $link(rel: String): Link {
    return undefined;
  }

  $embedded(rel: String): Resource {
    return undefined;
  }
}
