import ClayButton, { ClayButtonWithIcon } from '@clayui/button'
import { ClayDropDownWithItems } from '@clayui/drop-down'
import { ClayInput } from '@clayui/form'
import ClayIcon from '@clayui/icon'
import ClayManagementToolbar from '@clayui/management-toolbar'
import React, { useState } from 'react'

export default ({ AddButton = <></> }) => {
  const filterItems = [
    { label: 'Filter Action 1', onClick: () => alert('Filter clicked') },
    { label: 'Filter Action 2', onClick: () => alert('Filter clicked') }
  ]

  const viewTypes = [
    {
      label: 'List',
      onClick: () => alert('Show view list'),
      symbolLeft: 'list'
    },
    {
      active: true,
      label: 'Table',
      onClick: () => alert('Show view table'),
      symbolLeft: 'table'
    },
    {
      label: 'Card',
      onClick: () => alert('Show view card'),
      symbolLeft: 'cards2'
    }
  ]

  const [searchMobile, setSearchMobile] = useState(false)

  const viewTypeActive = viewTypes.find(type => type.active)

  return (
    <ClayManagementToolbar>
      <ClayManagementToolbar.ItemList>
        <ClayDropDownWithItems
          items={filterItems}

          trigger={
            <ClayButton className="nav-link" displayType="unstyled">
              <span className="navbar-breakpoint-down-d-none">
                <span className="navbar-text-truncate">
                  {'Filter and Order'}
                </span>

                <ClayIcon
                  className="inline-item inline-item-after"

                  symbol="caret-bottom"
                />
              </span>
              <span className="navbar-breakpoint-d-none">
                <ClayIcon symbol="filter" />
              </span>
            </ClayButton>
          }
        />

        <ClayManagementToolbar.Item>
          <ClayButton
            className="nav-link nav-link-monospaced order-arrow-down-active"
            displayType="unstyled"
            onClick={() => {}}
          >
            <ClayIcon symbol="order-arrow" />
          </ClayButton>
        </ClayManagementToolbar.Item>
      </ClayManagementToolbar.ItemList>

      <ClayManagementToolbar.Search showMobile={searchMobile}>
        <ClayInput.Group>
          <ClayInput.GroupItem>
            <ClayInput
              aria-label="Search"
              className="form-control input-group-inset input-group-inset-after"
              defaultValue="Red"
              disabled
              type="text"
            />
            <ClayInput.GroupInsetItem after tag="span">
              <ClayButtonWithIcon
                className="navbar-breakpoint-d-none"
                displayType="unstyled"
                onClick={() => setSearchMobile(false)}

                symbol="times"
              />
              <ClayButtonWithIcon
                displayType="unstyled"

                symbol="search"
                type="submit"
              />
            </ClayInput.GroupInsetItem>
          </ClayInput.GroupItem>
        </ClayInput.Group>
      </ClayManagementToolbar.Search>

      <ClayManagementToolbar.ItemList>
        <ClayManagementToolbar.Item className="navbar-breakpoint-d-none">
          <ClayButton
            className="nav-link nav-link-monospaced"
            displayType="unstyled"
            onClick={() => setSearchMobile(true)}
          >
            <ClayIcon symbol="search" />
          </ClayButton>
        </ClayManagementToolbar.Item>

        <ClayManagementToolbar.Item>
          <ClayButton
            className="nav-link nav-link-monospaced"
            displayType="unstyled"
            onClick={() => {}}
          >
            <ClayIcon symbol="info-circle-open" />
          </ClayButton>
        </ClayManagementToolbar.Item>

        <ClayManagementToolbar.Item>
          <ClayDropDownWithItems
            items={viewTypes}
            trigger={
              <ClayButton
                className="nav-link-monospaced nav-link"
                displayType="unstyled"
              >
                <ClayIcon

                  symbol={viewTypeActive ? viewTypeActive.symbolLeft : ''}
                />
              </ClayButton>
            }
          />
        </ClayManagementToolbar.Item>

        <ClayManagementToolbar.Item>
          <AddButton />
        </ClayManagementToolbar.Item>
      </ClayManagementToolbar.ItemList>
    </ClayManagementToolbar>
  )
}
