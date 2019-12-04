import {AmpIncludeAmpBind} from './AmpIncludeCustomElement';

export default function AmpState(props) {
  return (
    <>
      <AmpIncludeAmpBind />
      <amp-state id={props.id}>
        <script
          type="application/json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(props.children)}}
        />
      </amp-state>
    </>
  );
}
