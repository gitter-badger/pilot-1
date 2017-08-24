import React from 'react'

import ButtonUser from 'react-icons/lib/md/face'
import ButtonLogoff from 'react-icons/lib/fa/power-off'
import ButtonExport from 'react-icons/lib/fa/external-link'
import ButtonCopy from 'react-icons/lib/md/content-copy'
import ButtonDelete from 'react-icons/lib/fa/close'
import ButtonAdd from 'react-icons/lib/fa/plus'
import ButtonDocs from 'react-icons/lib/md/import-contacts'
import ButtonLetter from 'react-icons/lib/md/assignment'
import ButtonUpload from 'react-icons/lib/md/file-upload'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../../src/components/Button'
import style from './style.css'

storiesOf( 'Button', module )

  .add( 'green default', () =>
    <Button>Default Button</Button> )

  .add( 'green flat', () =>
    <Button onClick={action( 'clicked' )} type="flat">Flat Button</Button> )

  .add( 'green gradient', () =>
    <Button onClick={action( 'clicked' )} type="gradient">Gradient Button</Button> )

  .add( 'green outline', () =>
    <Button onClick={action( 'clicked' )} type="outline">Outline Button</Button> )

  .add( 'green dashed', () =>
    <Button onClick={action( 'clicked' )} type="dashed">Dashed Button</Button> )

  .add( 'green clean', () =>
    <Button onClick={action( 'clicked' )} type="clean">Clean Button</Button> )

  .add( 'green icon', () =>
    <div className={style.iconButtonCollection}>
      <Button onClick={action( 'clicked' )} type="flat">
        <ButtonUser />
        Minha Conta
      </Button>
      <Button onClick={action( 'clicked' )} type="flat">
        <ButtonLogoff />
        Desconectar
      </Button>
      <Button onClick={action( 'clicked' )} type="flat">
        <ButtonExport />
        Exportar
      </Button>
      <Button onClick={action( 'clicked' )} type="flat">
        <ButtonCopy />
        Copiar
      </Button>
      <Button onClick={action( 'clicked' )} type="flat">
        <ButtonDelete />
        Excluir
      </Button>
      <Button onClick={action( 'clicked' )} type="flat">
        <ButtonAdd />
        Adicionar
      </Button>
      <Button onClick={action( 'clicked' )} type="flat">
        <ButtonDocs />
        Documentação
      </Button>
      <Button onClick={action( 'clicked' )} type="flat">
        <ButtonLetter />
        Carta de Circulação
      </Button>
      <Button onClick={action( 'clicked' )} type="flat">
        <ButtonUpload />
        Fazer Upload
      </Button>
    </div>
  )

  .add( 'button block', () =>
    <div className={style.divBlock}>
      <Button onClick={action( 'clicked' )} type="block">Block Button 1</Button>
      <Button onClick={action( 'clicked' )} type="block">Block Button 2</Button>
      <Button onClick={action( 'clicked' )} type="block">Block Button 3</Button>
    </div>
  )
