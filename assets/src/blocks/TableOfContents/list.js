const ENTRY_CLASS_NAME = 'wp-block-table-of-contents__entry';

const TableOfContentsList = ({
  nestedHeadingList,
}) => (
  <>
    {nestedHeadingList.map((node, index) => {
      const { content, link } = node.heading;

      const entry = link ? (
        <a className={ENTRY_CLASS_NAME} href={link}>
          {content}
        </a>
      ) : (
        <span className={ENTRY_CLASS_NAME}>{content}</span>
      );

      return (
        <li key={index}>
          {entry}
          {node.children ? (
            <ol>
              <TableOfContentsList
                nestedHeadingList={node.children}
              />
            </ol>
          ) : null}
        </li>
      );
    })}
  </>
);

export default TableOfContentsList;
