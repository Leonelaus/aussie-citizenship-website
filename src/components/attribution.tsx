import { ExternalLink } from "@/components/external-link";
import { attribution } from "@/lib/site";

export function Attribution() {
  return (
    <div className="space-y-4 leading-7 text-muted">
      <p>
        Practice questions were adapted and modified for Aussie Citizenship from
        facts in {attribution.bookletTitle}, {attribution.bookletCopyright}.
      </p>
      <p>
        Official source:{" "}
        <ExternalLink href={attribution.bookletHref}>
          {attribution.bookletTitle}
        </ExternalLink>
        .
      </p>
      <p>
        Licence:{" "}
        <ExternalLink href={attribution.licenceHref}>
          {attribution.licenceName}
        </ExternalLink>
        .
      </p>
      <p>
        The booklet text is used under that licence, except the Commonwealth
        Coat of Arms. The app does not display the Arms. The adaptation is not
        endorsed by the Australian Government or the Department of Home Affairs.
      </p>
      <p>
        Aussie Citizenship is an independent educational application and is not
        affiliated with, endorsed by, or operated by the Australian Government
        or the Department of Home Affairs.
      </p>
      <p>
        The Australian National Flag image and the Sydney Opera House artwork in
        the app icon are separate materials. They are not covered by the booklet
        licence. This notice does not clear them, and it does not say the
        question bank is legally cleared.
      </p>
    </div>
  );
}
